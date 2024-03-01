import { gql } from "apollo-angular";

export const BLOG_HOST = "angular-headless.hashnode.dev";

export const GET_BLOG_INFO = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    id
    title
    isTeam
    links {
      twitter
      instagram
      github
      website
      hashnode
      youtube
      dailydev
      linkedin
      mastodon
    }
    followersCount
    url
    favicon
  }
}
`;

export const GET_AUTHOR_INFO = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    id
    author {
      username
      profilePicture
      socialMediaLinks {
      	__typename
        facebook
        github
        instagram
        linkedin
        stackoverflow
        twitter
        website
        youtube
      }
    }
  }
}
`;

export const GET_POSTS = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    id,
    isTeam,
    title,
    posts(first: 10) {
      edges {
        node {
          id,
          slug,
          coverImage {
            url
          }
          title,
          brief,
          content {
            html
          }
        }
      }
    }
  }
}
`;

export const GET_SERIES_LIST = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    id,
    title,
    seriesList(first:10) {
      edges {
        node {
          id,
          name,
          slug,
        }
      }
    }
  }
}
`;

export const GET_POSTS_IN_SERIES = gql`
query Publication ($slug: String!) {
  publication(host: "${BLOG_HOST}") {
    id,
    isTeam ,
    title,
    series(slug: $slug) {
      posts(first: 10) {
        edges {
          node {
            id,
            title,
            slug,
            coverImage {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const GET_SINGLE_POST = gql`
query SinglePost($slug: String!) {
  publication(host: "${BLOG_HOST}") {
    post(slug: $slug) {
      id,
      slug,
      title,
      readTimeInMinutes,
      tags {
        name
      },
      author {
        name,
        profilePicture,
        socialMediaLinks {
          twitter
          youtube
        }
      }
      coverImage {
        url
      },
      content {
        html
      },
      publishedAt,
    }
  }
}
`;

export const SEARCH_POSTS = gql`
query SearchPostsOfPublicationFilter($publicationId: ObjectId!, $query: String!) {
  searchPostsOfPublication(
    first: 5,
    filter: {
      publicationId: $publicationId,
      query: $query
    }
  ) {
    edges {
      node {
        id,
        slug,
        coverImage {
          url
        },
        author {
          name
        },
        publishedAt,
        title
      }
    }
  }
}
`;
