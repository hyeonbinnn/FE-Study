'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const handleDelete = () => {
    const options = {
      method: 'DELETE',
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, options)
      .then((res) => res.json())
      .then(() => {
        router.push('/');
        router.refresh();
      });
  };

  return (
    <ul>
      <li>
        <Link href="/create">만들기</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={'/update/' + id}>업데이트</Link>
          </li>
          <li>
            <input type="button" value="삭제" onClick={handleDelete} />
          </li>
        </>
      ) : null}
    </ul>
  );
}
