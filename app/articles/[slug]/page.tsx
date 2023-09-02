export default function Article({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>記事の詳細</h1>
            <h2>記事のスラッグコーナー</h2>
            <p>記事のスラッグ: {params.slug}</p>
        </div>
    );
}