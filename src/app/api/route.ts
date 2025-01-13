import { GraphQLClient, gql,} from 'graphql-request';


const graphqlAPI = 'https://eu-west-2.cdn.hygraph.com/content/cm5qngpa4005o07w0le4bgik4/master'
const GRAPHCMS_TOKEN   =process.env.GRAPHCMS_TOKEN


export async function POST(req) {
  const {name,email,comment,slug} = await req.json();
    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
          authorization: `Bearer ${GRAPHCMS_TOKEN}`,
        },
      });

      const query = gql` mutation {
      createComment(data: {name: ${name}, email: ${email}, comment: ${comment},slug: ${slug}})
      id,
      name,
      email,
      comment,
      slug
    }
  `
 
  try {
    const result = await graphQLClient.request(query);
    return Response.json(result,{status:200})
  } catch (error) {
    console.log(error);
    
     return Response.json(error,{status:500})
  } 
}