const AddInternship = () => {
    return (
      <div>
        <h2>Add New Internship</h2>
        <form>
          <label>Internship Title:</label>
          <input type="text" name="title" />
          <label>Description:</label>
          <textarea name="description"></textarea>
          <button type="submit">Add Internship</button>
        </form>
      </div>
    );
  };
  
  export default AddInternship;
  