# User Class
### Create a user object


# Installation

```
npm i user-class
```

# Usage

```javascript
const User = require("user-class")

const Bob = new User("Bob", "Smith", 23124, 20)
```

# Documentation


### Create user
```javascript
const Bob = new User("Bob", "Smith", 23124, 20)
```

### Get first name | Returns a **string**
```javascript
Bob.getFirstName() // Returns "Bob"
```

### Get last name | Returns a **string**
```javascript
Bob.getLastName() // Returns "Smith"
```

### Get full name | Returns a **string**
```javascript
Bob.getLastName() // Returns "Bob Smith"
```

### Get id | Returns a **number**
```javascript
Bob.getId() // Returns 23124
```

### Get age | Returns a **number**
```javascript
Bob.getAge() // Returns 20
```

### Get user object
```javascript
Bob.getUserObject() // Returns 20
```
### Returns an object
```
{
  firstName: 'Bob',
  lastName: 'Bob',
  fullName: 'Bob Bob',
  id: 214134,
  age: 20
}
```
