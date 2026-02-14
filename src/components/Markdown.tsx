export function Markdown({ content }: { content: string }) {
  const lines = content.split('\n');
  const output: JSX.Element[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (!listBuffer.length) return;
    output.push(
      <ul key={`list-${output.length}`} className='list'>
        {listBuffer.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith('## ')) {
      flushList();
      output.push(<h2 key={`h2-${idx}`}>{line.slice(3)}</h2>);
      return;
    }

    if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
      return;
    }

    flushList();
    const strongMatch = line.match(/\*\*(.*?)\*\*/);
    if (strongMatch) {
      const [full, inner] = strongMatch;
      const [start, end] = line.split(full);
      output.push(<p key={`p-${idx}`}>{start}<strong>{inner}</strong>{end}</p>);
    } else {
      output.push(<p key={`p-${idx}`}>{line}</p>);
    }
  });

  flushList();

  return <article className='markdown'>{output}</article>;
}
