import React from "react";
import { toast } from "react-toastify";
import { withTranslation } from "react-i18next";
import { setLanguage } from "../redux/language/actions";
import { connect } from "react-redux";
import todoService from "../service/todolistService";

class AddToDo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAddToDo = async (todo) => {
    if (!this.state.title) {
      toast.error("Please enter title !!!");
    } else {
      let todo = {
        title: this.state.title,
      };
      await todoService.createTodo(todo);
      toast.success("Create To do list succesful!");
      this.setState({
        title: "",
      });
      this.props.loadTodo();
    }
  };

  render() {
    let { title } = this.state;
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(e) => this.handleOnChangeTitle(e)}
          />
          <button onClick={() => this.handleAddToDo()}>
            {this.props.t("Add")}
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (payload) => {
      dispatch(setLanguage(payload));
    },
  };
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(AddToDo)
);
