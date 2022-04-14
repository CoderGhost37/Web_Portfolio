import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'lzxxs01f',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skIT7qplZO0NY1NZ0o77IGOlqcCLZhXNo25BTBrQiYYaLgSwQmfz6dyaenSGOcyCN7OLprxeN3QQBNda5kgZlxtAt35CS5XKOGJMQLSjtxeV1c3I51ZlOfbA7xCezDIcLdU9KM6AXMGdkLc38idwGXr39QMgOs6axHbXEwFYZpCeD0R5QzGn',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);