import React, {useState, useEffect} from 'react'


function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <section id='LoadingScreen'  className='d-flex justify-content-center align-items-center'>
        {/* {loading ? "loading..." : "hello"} */}
    </section>
  )
}

export default LoadingScreen