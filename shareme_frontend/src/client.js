import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'kamx1qo9',
  dataset: 'production',
  apiVersion: '2022-08-01',
  useCdn: true,
  token:
    process.env.REACT_APP_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
