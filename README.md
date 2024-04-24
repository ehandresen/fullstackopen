# Full Stack Open

## _Deep Dive into Modern Web Development_

> I promise to keep the console open all the time during this course, and for the rest of my life when I'm doing web development

http://www.fullstackopen.com/en/

---

### Completion Overview:

- [x] Part 0 - Fundamentals of Web apps
- [x] Part 1 - Introduction to React
- [ ] **Part 2 - Communicating with server _(In progress)_**
  - [x] a - Rendering a collection
  - [x] b - Forms
  - [x] c - Getting data from server
  - [ ] d - Altering data in server
  - [ ] e - Adding styles to React app
- [ ] Part 3 - Programming a server with NodeJS and Express

### Notes:

- part 2: The new note is added to the list of notes using the concat array method:
  <code>setNotes(notes.concat(noteObject))</code>
  The method does not mutate the original <code>notes</code> array, but rather creates _a new copy of the array with the new item added to the end_. This is important since we must **never mutate state directly** in React!
