const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: ''
  });

  const { name, email, password, verifyPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== verifyPassword) {
      alert('Passwords do not match. Please try again.');
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    this.props.navigation.navigate('Dashboard');
  }
};

if (isAuthenticated) {
  navigation.navigate('Dashboard');
}
