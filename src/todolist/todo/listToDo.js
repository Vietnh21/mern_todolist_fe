import React from "react";
import "./style.css";
import AddToDo from "./addTodo";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Select, Button } from "antd";
import { withRouter } from "../hook/navigate";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { setLanguage } from "../redux/language/actions";
import { auth } from "../HomePage/firebase";
import todoService from "../service/todolistService";

const { Option } = Select;

class ListTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ListTodos: undefined,
      editToDo: {},
    };
  }

  componentDidMount() {
    todoService.getListTodo().then((res) => {
      this.setState({
        ListTodos: res,
      });
    });
  }

  loadTodo = () => {
    todoService.getListTodo().then((res) => {
      this.setState({
        ListTodos: res,
      });
    });
  };

  addToDo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
  };

  handleDeleteToDo = (id) => {
    todoService.deleteTodo(id).then((res) => {
      todoService.getListTodo().then((res) => {
        this.setState({
          ListTodos: res,
        });
        toast.success("Delete to do succesful !");
      });
    });
  };

  handleEditToDo = (todo) => {
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo._id === todo._id) {
      todoService.ListTodos(todo._id, { title: editTodo.title }).then((res) => {
        this.setState({
          ListTodos: res.data,
          editTodo: {},
        });
      });
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditToDo = (e) => {
    let editTodoCopy = { ...this.state.editToDo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editToDo: editTodoCopy,
    });
  };

  handleSelect = (value) => {
    this.props.setLanguage(value);
    this.props.i18n.changeLanguage(value);
  };

  handleLogout = () => {
    auth.signOut().then(() => {
      this.props.router.navigate("/");
    });
  };

  render() {
    let { ListTodos, editToDo } = this.state;
    let isEmpty = Object.keys(editToDo).length === 0;
    const user = auth.currentUser;
    if (!user) {
      this.props.router.navigate("/");
    }
    return (
      <>
        <div className="translate">
          <Select
            value={this.props.language}
            style={{ width: 120 }}
            onChange={this.handleSelect}
          >
            <Option value="en">{this.props.t("english")}</Option>
            <Option value="vn">{this.props.t("vietnam")}</Option>
          </Select>

          <div className="LogOut">
            <Button onClick={this.handleLogout} type="primary">
              Sign Out
            </Button>
            <Link to="/count">
              <Button className="count-number">Count Number</Button>
            </Link>
          </div>
        </div>
        <div className="listToDo-Container">
          <h3>{this.props.t("title")}</h3>
          <AddToDo
            addNewToDo={this.addToDo}
            ListTodos={ListTodos}
            loadTodo={this.loadTodo}
          />
          {ListTodos &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-content" key={index}>
                  {isEmpty === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editToDo._id === item._id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editToDo.title}
                            onChange={(e) => this.handleOnChangeEditToDo(e)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="btn-edit"
                    onClick={() => this.handleEditToDo(item._id)}
                  >
                    {isEmpty === false && item._id === editToDo._id
                      ? this.props.t("save")
                      : this.props.t("edit")}
                  </button>
                  <button onClick={() => this.handleDeleteToDo(item._id)}>
                    {this.props.t("delete")}
                  </button>
                </div>
              );
            })}
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

export default withRouter(
  withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ListTodo))
);
