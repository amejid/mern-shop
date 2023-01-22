import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {getUserDetails, updateUser} from "../store/actions/userActions";
import {USER_UPDATE_RESET} from "../store/constants/userConstants";

const UserEditScreen = () => {
  const {id: userId} = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector(state => state.userDetail);
  const {loading, error, user} = userDetail;
  const userUpdate = useSelector(state => state.userUpdate);
  const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate;

  useEffect(() => {
      if (successUpdate) {
        dispatch({type: USER_UPDATE_RESET});
        navigate('/admin/userlist');
      } else {
        if (!user.name || user._id !== userId) {
          dispatch(getUserDetails(userId));
        } else {
          setName(user.name);
          setEmail(user.email);
          setIsAdmin(user.isAdmin);
        }
      }
    }, [dispatch, user, userId, navigate, successUpdate]
  )

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({_id: userId, name, email, isAdmin}));
  }

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">Go Back</Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader/>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="py-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name}
                            onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="email" className="py-2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email}
                            onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="isadmin" className="py-2">
              <Form.Check type="checkbox" label="Is Admin" checked={isAdmin}
                          onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
            </Form.Group>
            <Button type="submit" variant="primary" className="my-3">Update</Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen;