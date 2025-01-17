"use server"
import { gql, request } from 'graphql-request'



const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "hellow"

export const Getpost=async()=>{
   const query=gql`
   query MyQuery {
  postsConnection {
    edges {
      node {
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        category {
          name
          slug
        }
      }
    }
  }
}`
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results:any=await request(graphqlAPI,query,[{name:"ስፖርት",slug:"sport"}])
  return results.postsConnection.edges
} catch (error) {
  console.log(error);
  return {error:true} 
}

}
export const getSimilarPosts = async (categories:[], slug:string,amount:number) => {
  const query = gql`
    query MyQuery{
      posts(
        where: {slug_not: "${slug}"}
        last:${amount}
      ) {
        title
        excerpt
        slug
        featuredImage {
          url
        }
         category {
          name
          slug
        }
        createdAt
        slug
      }
    }
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query, { slug, categories ,amount});
     return result.posts;
  } catch (error) {
    console.log(error);
    return {error:true}
  }
 
};
export const getSportPosts = async () => {
  const query = gql`
   query MyQuery {
  posts(where: {category_some: {name: "ስፖርት"}}, last: 10) {
    title
        excerpt
        slug
        featuredImage {
          url
        }
         category {
          name
          slug
        }
        createdAt
        slug
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results:any=await request(graphqlAPI,query)
    return results.posts;
  } catch (error) {
    console.log(error); 
    return {error:true}
  }
}
export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
  posts(last: 5, orderBy:createdAt_DESC) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
    excerpt
      category {
          name
          slug
        }
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query);
    return result.posts
  } catch (error) {
    console.log(error)
    return {error:true}
  }
 
};
export const getRecent = async ({slug}) => {
  const query = gql`
    query MyQuery {
  posts( where: {slug_not:${slug}}, last: 4, orderBy:createdAt_DESC) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
    excerpt
      category {
          name
          slug
        }
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query,{slug});
    return result.posts
  } catch (error) {
     console.log(error);
     return {error:true}
     
  }
 
};

export const getNearRecentPosts = async (createdAt) => {
  const query = gql`
    query MyQuery {
  posts(createdAt_lt:${createdAt}},last: 4) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
    excerpt
      category {
          name
          slug
        }
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query,{createdAt});
    return result.posts
  } catch (error) {
     console.log(error);
     return {error:true}
     
  }
 
};

export const getPostDetails = async (slug:string) => {
  const query = gql`
     query MyQuery {
  post(where: {slug:"${slug}"}) {
    title
    excerpt
    featuredImage {
      url
    }
    slug
    createdAt
    content {
         json
    }
    category {
      name
      slug
    }
  }
}
  `
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results:any = await request(graphqlAPI, query, { slug });
  return results.post
} catch (error) {
  console.log(error);
  return {error:true}
  
}
  
};  

export const getCategorypost = async (category:string) => {
  const query = gql`
   query MyQuery {
  posts(where: {category_some: {name:"${category}"}}, last: 10) {
    title
        excerpt
        slug
        featuredImage {
          url
        }
         category {
          name
          slug
        }
        createdAt
        slug
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results:any=await request(graphqlAPI,query)
    return results.posts;
  } catch (error) {
    console.log(error); 
    return {error:true}
  }
}

export const getSearch = async (value: string, first: number, skip: number) => {
  const query = gql`
    query MyQuery($value: String!, $first: Int!, $skip: Int!) {
      posts(where: { _search: $value }, first: $first, skip: $skip) {
        title
        excerpt
        slug
        featuredImage {
          url
        }
        category {
          name
          slug
        }
        createdAt
      }
    }
  `;

  try {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results:any= await request(graphqlAPI, query, {
      value,
      first,
      skip,
    });
    return results.posts;
  } catch (error) {
    console.error(error);
    return {error:true}
  }
};
