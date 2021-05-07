import Sidebar from '../../components/Admin/Sidebar';
import TopNavbar from '../../components/Admin/TopNavbar';
import Today from './Today';

function Admin () {

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopNavbar />
        <Today />
      </div>
    </>
  );
}

export default Admin;
