export default class AppController {
  static getHomepage(_req, res) {
    res.status(200).type('text').send('Hello Holberton School!');
  }
}
