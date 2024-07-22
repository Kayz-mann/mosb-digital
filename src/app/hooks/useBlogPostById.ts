import { useQuery } from "@tanstack/react-query";
import { client } from "../../../sanity/lib/client";

export const fetchBlogPostById: any = async (id: string | number) => {
    const query = `*[_type == "blogPost" && id == "${id}"]{
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

    // console.log('ID',data);
    
    // Check if data array is empty
    if (data.length === 0) {
        // Throw an error or return a default value
        throw new Error(`No blog post found with id ${id}`);
    }

    return data; // Return the first item in the array since there should only be one result
};




const useBlogPostById = (id: string) => {
    return useQuery({
        queryKey: ['blogPostsById', id],
        queryFn: fetchBlogPostById(id),
        refetchInterval: 1000,
    }
    );
};

export default useBlogPostById;
