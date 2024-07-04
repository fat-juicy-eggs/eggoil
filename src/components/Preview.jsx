import { useState, useEffect } from 'react';

const Preview = ({ url }) => {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        const title = doc.querySelector('title')?.textContent || 'Title not found';
        const description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'Description unavailable';
        const imagePath = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
        const image = imagePath ? new URL(imagePath, url).href : '';

        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Image:', image);

        setPreviewData({ title, description, image });
      } catch (error) {
        console.error('Error fetching preview data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return (
      <div className="h-full flex flex-col mx-auto text-[20px]">
        <p className="mt-4">Loading...</p>
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
      {previewData.image ? (
        <img src={previewData.image} alt="Link Preview" />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
};

export default Preview;
