import Layout from "../components/Layout";
import Header from "../components/Header";
import Video from "../components/Video";
import Footer from "../components/Footer";

const Index = () => (
  <Layout>
    <Header
      title="Caption"
      subtitle="Find the right subtitles. Easy."
      download
    />
    <Video />
    <Footer />
  </Layout>
);

export default Index;
