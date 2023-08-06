// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
using System;
// using System.Windows.Forms;

namespace LoginFormExample
{
    public partial class LoginForm : Form
    {
        private const string Username = "admin";
        private const string Password = "password";

        public LoginForm()
        {
            InitializeComponent();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            string enteredUsername = txtUsername.Text;
            string enteredPassword = txtPassword.Text;

            if (enteredUsername == Username && enteredPassword == Password)
            {
                MessageBox.Show("Login successful!");
                // Perform further actions after successful login
            }
            else
            {
                MessageBox.Show("Invalid username or password. Please try again.");
            }
        }
    }
}

