# Clone of the [list.am](https:/list.am) online shop's "antique collection" page.
The script creates a collection on `AWS` with `MongoDB Atlas` and inserts announcements from a JSON file stored locally. Then reads the data from the cloud to show on the web page. The appearance of the latter is implemented identically to the real [list.am](https:/list.am), and is designed with `Vue JS` and `Semantic UI`. The whole logic and functionality of the backend are developed with `Node.js`.

Run the app:
```sh
cd app && npm i && node app.js
```
