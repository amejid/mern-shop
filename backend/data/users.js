import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@mail.com',
    password: bcrypt.hashSync('123456', 12),
  },
  {
    name: 'Jane Doe',
    email: 'jane@mail.com',
    password: bcrypt.hashSync('123456', 12),
  }
]

export default users;