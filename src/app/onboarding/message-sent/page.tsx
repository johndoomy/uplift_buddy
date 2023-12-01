import Link from 'next/link';
import paths from '@/paths';

export default function MessageSentPage() {
  return (
    <div className="mt-24">
      <h1>Message Sent!</h1>
      <Link href={paths.home()}>Return to home</Link>
    </div>
  );
}
