import PrivateRoutes from "../components/PrivateRoutes/index.js";
import { LayoutAdmin } from "../layout/admin/index.js";
import { LayoutDefault } from "../layout/client";
import { Home } from "../pages/client/Home";
import { Login } from "../pages/client/Login/index.js";
import { Logout } from "../pages/client/Logout/index.js";
import { Register } from "../pages/client/Register/index.js";
import { Dashboard } from "../pages/admin/Dashboard";
import { ManageCompany } from "../pages/admin/ManagerCompany/index.js";
import { ManageJob } from "../pages/admin/ManageJob/index.js";
import { ManageCV } from "../pages/admin/ManageCV/index.js";
import { ReadJob } from "../pages/admin/ManageJob/ReadJob.js";
import { CreateJob } from "../pages/admin/ManageJob/CreateJob.js";
import { ReadCV } from "../pages/admin/ManageCV/ReadCV.js";
import { Posts } from "../pages/client/Posts/index.js";
import { PostDetail } from "../pages/client/PostDetail/index.js";
import { About } from "../pages/client/About/index.js";
import { Contact } from "../pages/client/Contact/index.js";
import { SamplePost } from "../pages/client/SamplePost/index.js";

export const routes = [
  // Public layout
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "register", element: <Register /> },
      { path: "posts", element: <Posts /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "sample-post", element: <SamplePost /> },
    ],
  },

  // Admin layout (protected)
  {
    path: "/admin",
    element: <PrivateRoutes />, // chỉ bọc bảo vệ ở đây
    children: [
      {
        element: <LayoutAdmin />, // layout admin riêng
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "manage-company", element: <ManageCompany /> },
          { path: "manage-job", element: <ManageJob /> },
          { path: "manage-cv", element: <ManageCV /> },
          { path: "create-job", element: <CreateJob /> },
          { path: "read-job/:id", element: <ReadJob /> },
          { path: "read-cv/:id", element: <ReadCV /> },
          // thêm route admin khác ở đây
        ],
      },
    ],
  },
];

