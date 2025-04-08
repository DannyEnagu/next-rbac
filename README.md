#

## Project Setup

### Generate a Random JWT Secret Key

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
