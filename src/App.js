import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import {ListUsersPage} from "./components/ListUsersPage";
import {AddUserPage} from "./components/AddUserPage";
import {EditUserPage} from "./components/EditUserPage";
import {ViewUserPage} from "./components/ViewUsersPage";

export default function App() {

  return <BrowserRouter>
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">API Application</Navbar.Brand>
          <Nav className="float-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add New</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="pt-5">
        <Routes>
          <Route index element={<ListUsersPage />} />
          <Route path="add" element={<AddUserPage />} />
          <Route path="users/:userId/edit" element={<EditUserPage />} />
          <Route path="users/:userId" element={<ViewUserPage />} />
        </Routes>
      </Container>
    </div>
  </BrowserRouter>

}