import Sidebar from '../../components/Admin/Sidebar';
import TopNavbar from '../../components/Admin/TopNavbar';
import Header from '../../components/Admin/Header';

function Admin () {

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopNavbar />
        <Header />
      </div>
    </>
  );
}

export default Admin;
