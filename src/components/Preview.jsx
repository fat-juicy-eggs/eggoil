import { useState, useEffect } from 'react';

const Preview = ({ url }) => {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const title = doc.querySelector('title')?.textContent || 'not found';
        const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'description unavailable';
        const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

        setPreviewData({ title, description, image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return (
      <div className="h-full flex flex-col mx-auto text-[20px]">
          <p className="mt-4">404: Could not find the page</p>
      </div>
    );
  }

  if (!previewData) {
    return (
      <div className="h-full flex flex-col mx-auto text-[20px]">
          <p className="mt-4">404: Could not fetch preview data</p>
      </div>
    );
  }

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{previewData.title}</h3>
      <p>{previewData.description}</p>
      <img src={previewData.image} alt="Link Preview" />
    </div>
  );
};

export default Preview;
