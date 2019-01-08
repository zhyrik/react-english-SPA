import { gql } from 'apollo-boost'

const addCategory = gql`
mutation($title: String!, $description: String!, $learnLenguage: String!, $nativeLenguage: String!, $stars: Int!, $starsCount: Int!, $learnCount: Int!, $promo: Boolean!, $author: String!){
  addCategory(title: $title, description: $description, learnLenguage: $learnLenguage, nativeLenguage: $nativeLenguage, stars: $stars, starsCount: $starsCount, learnCount: $learnCount, promo:$promo, author: $author){
    id
  }
}
`

const addWord = gql`
mutation($native: String!, $english: String!, $url: String!, $categoryId: ID!){
  addWord(native: $native, english: $english, utl: $url, categoryId: $categoryId){
    id
  }
}
`

export { addCategory, addWord }