# sprintf() lite for JavaScript

Low-fat implementation of the sprintf() function for JavaScript that gets you all you need.

For simple string templates.
```
{person1} gets easily triggered when {person2} makes fun of CS:GO.
```
or API endpoint path parameters.
```
/path/to/{success}/should/not/{be}/hard
/path/to/:success/should/not/:be/hard
```

## Description
```
string sprintf (string $format [, mixed $args [, mixed $... ]])
```
Returns a string produced according to the formatting string merged with replacement values.

#### Compatible specifiers
+ d — print an integer as is
+ u — print an integer as is
+ f — print a float as is
+ s — print a string as is

#### Named keys
+ :key - print a value of an object key as is.
+ {key} - print a value of an object key as is.

## Install
```
npm install sprintf-lite
```

## Use
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
sprintf('/my/%s/api/%s/number/%d', 'awesome', 'endpoint', 1)
```
The above example will output:
```
Two + 3 = Five
/my/awesome/api/endpoint/number/1
```

### Example #2 Basic named keys replacement
Embedding object keys into configuration strings or any string templates.
```
sprintf('Dear {firstName} {lastName}, ...', {firstName: 'John', lastName: 'Doe'})
sprintf('/users/{userId}/orders/{orderId}', {userId: 654321, orderId: 987654321})
sprintf('/users/:userId/orders/:orderId', {userId: 654321, orderId: 987654321})
```
The above example will output:
```
Dear John Doe, ...
/users/654321/orders/987654321
/users/654321/orders/987654321
```

### Example #3 Argument swapping and reuse
Keys can be used multiple times in any arbitrary order.
```
sprintf('In America, you {do} {what}, in Soviet Russia, {what} {do}s YOU!', {do: 'install', what: 'a package'})
```
The above example will output:
```
In America, you install a package, in Soviet Russia, a package installs YOU!
```
