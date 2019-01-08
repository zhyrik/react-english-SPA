const graphql = require('graphql');
const Word = require('../models/word');
const Category = require('../models/category');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const CategoryType = new GraphQLObjectType({
  name: 'category',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    learnLenguage: { type: GraphQLString },
    nativeLenguage: { type: GraphQLString },
    stars: { type: GraphQLInt},
    starsCount: { type: GraphQLInt},
    learnCount: { type: GraphQLInt},
    promo: { type: GraphQLBoolean},
    author: { type: GraphQLString},
    words: {
      type: new GraphQLList(WordType),
      resolve(parent, args) {
        return  Word.find({ categoryId: parent.id });
      }
    }
  })
});

const WordType = new GraphQLObjectType({
  name: 'word',
  fields: () => ({
    id: { type: GraphQLID },
    native: { type: GraphQLString },
    english: { type: GraphQLString },
    url: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Category.find(Category.findById(parent.categoryId))
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    word: {
      type: WordType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return Word.findById(args.id);
      }
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Category.findById(args.id);
      }
    },
    words: {
      type: new GraphQLList(WordType),
      resolve(parent, args) {
        return Word.find({});
      }
    },
    category: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {
        return Category.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addWord: {
      type: WordType,
      args: {
        native: { type: new GraphQLNonNull(GraphQLString) },
        english: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) },
        categoryId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let word = new Word({
          native: args.native,
          english: args.english,
          url: args.url,
          categoryId: args.categoryId
        });
        return word.save();
      }
    },
    addCategory: {
      type: CategoryType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        learnLenguage: { type: new GraphQLNonNull(GraphQLString) },
        nativeLenguage: { type: new GraphQLNonNull(GraphQLString) },
        stars: { type: new GraphQLNonNull(GraphQLInt) },
        starsCount: { type: new GraphQLNonNull(GraphQLInt) },
        learnCount: { type: new GraphQLNonNull(GraphQLInt) },
        promo: { type: new GraphQLNonNull(GraphQLBoolean) },
        author: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let category = new Category({
          title: args.title,
          description: args.description,
          learnLenguage: args.learnLenguage,
          nativeLenguage: args.nativeLenguage,
          stars: args.stars,
          starsCount: args.starsCount,
          learnCount: args.learnCount,
          promo: args.promo,
          author: args.author
        });
        return category.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
