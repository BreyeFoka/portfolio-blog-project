
type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
