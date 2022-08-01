import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'kamx1qo9',
  dataset: 'production',
  apiVersion: '2022-08-01',
  useCdn: true,
  token:
    'skQoHnsr4p1FdJlQakjDBsi5XcmZwhEDys456HCzHmtKDAkiqy0BhaveAZ3yFZlNyPwYfwNmZQXHWsqxc0ry3x7a70ho8P6mNWnvvpEgd0YDy79NfLluFfX73YqohGY7wb6mmP2MD4wXlXw7jXvpHdIQwO0y4TGAmEMUtgzUaMHIjNSl7yU8',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
