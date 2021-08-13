const NotFound = () => {
    return (
      <div>
        <p>not found</p>
      </div>
    )
  }
  
  export async function getStaticProps() {
    return {
      props: {},
      revalidate: 10
    }
  }
  
  export default NotFound