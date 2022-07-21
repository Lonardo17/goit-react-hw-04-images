import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './image-gallery/ImageGallery';

export function App() {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const loadMore = () => setPage(prevState => prevState + 1);
  const addRequest = newRequest => {
    if (request !== newRequest) {
      setRequest(newRequest.toLowerCase());
      setPage(1);
    }
  };
    return (
      <div>
        <Searchbar onGetRequest={addRequest} />
          <ImageGallery
            request={request}
            page={page}
            loadMore={loadMore}
          />
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
