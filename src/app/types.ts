

type PostProps={
  author:AutorProps
  createdAt:string
  slug:string
  title:string
  excerpt:string
  featuredImage:{url:string}
  category:[]
  content:{json:object}
}

type AutorProps={
    bio:string
    id:string
    photo:{url:string}
    name:string
}

 type NodeProps ={
    author:AutorProps
    createdAt:string
    slug:string
    title:string
    excerpt:string
    featuredImage:{url:string}
    category:[]
  }

 
  export type {NodeProps,PostProps,AutorProps}