class LoginSystem:
    def __init__(self):
        self.users = dict()
        self.logged_users = set()
        self.mapping = {
            "a": "i", "b": "l", "c": "q", "d": "f", "e": "z", "f": "s",
            "g": "a", "h": "g", "i": "e", "j": "p", "k": "w", "l": "o",
            "m": "v", "n": "u", "o": "b", "p": "j", "q": "k", "r": "n",
            "s": "x", "t": "d", "u": "h", "v": "y", "w": "t", "x": "m",
            "y": "r", "z": "c"
        }
    
    def register(self, username, password):
        if username in self.users:
            print("user already exists")
        else:
            encrypted_password = self.encrypt(password)
            self.users[username] = encrypted_password
            print("user registered successfully")

    def login(self, username, password):
        if username in self.users:
            encrypted_password = self.encrypt(password)
            if self.users[username] == encrypted_password:
                self.logged_users.add(username)
                print("user logged in successfully")
            else:
                print("password doesn't match")
        else:
            print("user isn't in the system")
    
    def sign_out(self, username):
        if username in self.users:
            if username in self.logged_users:
                self.logged_users.remove(username)
                print("user signed out successfully")
            else:
                print("user is not logged in")
        else:
            print("user is not in the system")

    def encrypt(self, password):
        encrypted_password = ""
        for char in password:
            encrypted_password += self.mapping[char]
        return encrypted_password