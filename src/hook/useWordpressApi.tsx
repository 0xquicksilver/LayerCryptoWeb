import config from "../config";

type wpApi = {
    endpoint: "POSTS" | "TAGS" | "CATEGORIES" | "MEDIA" | "USERS" | "SEARCH";
    id?: string | any;
};

export async function _get(params: wpApi) {
    let url = config.API_URL + config.API_ENDPOINT[params.endpoint];
    if (params.id) {
        url = url + params.id;
    }

    const data = await fetch(url).then((res) => res.json());
    return data;
}

export async function _posts() {
    const data = await _get({ endpoint: "POSTS" });
    return data;
}

export async function _postsBySlug(params: any) {
    const data = await _get({ endpoint: "POSTS" });
    const post = data.find(({ slug }: any) => slug === params);
    const category = await _getCategoryById(post.categories);
    const tags = await _getTagsById(post.tags);
    const author = await _getAuthor(post.author);
    const thumbnail = post.featured_media
        ? await _getMedia(post.featured_media).then(
              (res) => res.sizes.large.source_url
          )
        : "http://layer404.biz/wp-content/uploads/2022/08/LayerCrypto-1024x726.png";
    const newData = {
        ...post,
        categories: category,
        tags,
        author,
        featured_media: thumbnail,
    };
    return newData;
}

export async function _getCategoryById(params: any) {
    const data = await _get({ endpoint: "CATEGORIES" });
    const arr = new Array();
    params.map((i: any) => {
        const category = data.find(({ id }: any) => id === i);
        arr.push(category);
    });
    return arr;
}

export async function _getTagsById(params: any) {
    const data = await _get({ endpoint: "TAGS" });
    const arr = new Array();
    params.map((i: any) => {
        const tags = data.find(({ id }: any) => id === i);
        arr.push(tags);
    });
    return arr;
}

export async function _getAuthor(params: any) {
    const data = await _get({ endpoint: "USERS" });
    console.log(data);
    return data.find(({ id }: any) => id === params);
}

export async function _getMedia(params: any) {
    const data = await _get({ endpoint: "MEDIA", id: params });
    return data.media_details;
}
