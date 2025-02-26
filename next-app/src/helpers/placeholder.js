'use server';

import { getPlaiceholder } from 'plaiceholder';

export default async function getPlaceholder(src) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    console.log(err);
  }
}
