import {
    useQuery,
  } from '@tanstack/react-query'
import { client } from '../../../sanity/lib/client';


const fetchBlogPosts = async () => {
    const query = `*[_type == "blogPost"]{
        id,
        createdAt,
        'authorImage': authorImage.asset->url,
        authorName,
        authorJobRole,
        companyName,
        category,
        title,
        'image': image.asset->url,
        description,
        headline,
        quote,
        quoteAuthor,
        footerDescription
    }`;

    const data = await client.fetch(query);
    return data;
};

const useBlogPosts = () => {
    return useQuery({
        queryKey: ['blogPosts'],
        queryFn: fetchBlogPosts,
        refetchInterval: 1000
    });
};


export default useBlogPosts;