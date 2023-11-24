import { getServerSession } from 'next-auth';

import { options } from '@/utils/nextauth/option';

async function getData(userId: string) {
  // ... Logic filtering database
  return userId;
}

export default async function Page() {
  const session = await getServerSession(options);
  const data = await getData(session?.user?.id as string);
  console.log(data);

  return <div>Page</div>;
}
