# sprintf() lite for JavaScript

Low-fat implementation of the sprintf() function for JavaScript that gets you all you need.


### Description
```
string sprintf (string $format [, mixed $args [, mixed $... ]])
```
Returns a string produced according to the formatting string merged with replacement values.


### Install
```
npm install sprintf-lite
```

### Use
ES5
```
var sprintf = require('sprintf-lite')
```

ES6
```
import sprintf from 'sprintf-lite'
```

# Examples IRL

### Example #1 Basic anonymous keys replacement
Quick string formatting.
```
sprintf('%s + %d = %s', 'Two', 3, 'Five')
sprintf('/my/%s/api/%s/number/', 'awesome', 'endpoint', 1)
```
The above example will output:
```
Two + 3 = Five
/my/awesome/api/endpoint/number/1
```

### Example #2 Basic named keys replacement
Embedding object keys into configuration strings or simple templates.
```
sprintf('Dear {firstName} {lastName}, ...', {firstName: 'John', lastName: 'Doe'})
sprintf('/users/{userId}/orders/{orderId}', {userId: 654321, orderId: 987654321})
```
The above example will output:
```
Dear John Doe, ...
/users/654321/orders/987654321
```

### Example #3 Argument swapping and reuse
Keys can be used multiple times in any arbitrary order.
```
sprintf('That {location} was full of gals and only a {number} dudes, {number} dudes had a ball at that {location}.', {location: 'place', number: 'few'})
```
The above example will output:
```
That place was full of gals and only a few dudes, few dudes had a ball at that place.
```
