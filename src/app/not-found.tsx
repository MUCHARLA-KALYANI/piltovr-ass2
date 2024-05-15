import Image from 'next/image';
const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlEUlO4fGaniSTqw9cHz7ulf4DMzeLyMnrA&usqp=CAU" alt="404 Error" />
      <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Page not found</h1>
      <p style={{fontSize:'20px',fontWeight:'initial'}}>Sorry, the page you are looking for does not exist. Please recheck the URL or <strong><a href='/' style={{ color: 'blue' }}>click here</a></strong> to go to the home page.</p>
    </div>
  );
};

export default NotFoundPage;
