# sprintf() lite for JavaScript
Low-fat implementation of the sprintf() function for JavaScript.

### Description

```
string sprintf (string $format [, mixed $args [, mixed $... ]])
```

Returns a string produced according to the formatting string format.

# Examples IRL

### Example #1 Basic usage
```
sprintf('/my/%s/api/%s', 'awesome', 'endpoint')
```
The above example will output:
```
/my/awesome/api/endpoint
```

### Example #2 Argument swapping and reuse
```
sprintf('That {location} was full of gals and only a {number} dudes, {number} dudes had a ball at that {location}.', {location: 'place', number: 'few'})
```
The above example will output:
```
That place was full of gals and only a few dudes, few dudes had a ball at that place.
```
