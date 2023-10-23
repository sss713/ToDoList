from sqlalchemy import create_engine, Column, Integer, String, Boolean, Date, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()
class ToDoTask(Base):
    __tablename__ = 'ToDoTask'

    TDtask_id = Column(Integer, primary_key=True)
    TDtask_name = Column(String(120))
    TDtask_description = Column(String(250))
    TDtask_status = Column(Integer)
    TDtask_deadline = Column(Date)
    TDtask_completed = Column(Boolean)


class User(Base):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True)
    Login = Column(String(90))
    Password = Column(String(250))
    Nickname = Column(String(250))
    telegram_id = Column(Integer)


class ND(Base):
    __tablename__ = 'nd'

    ND_id = Column(Integer, primary_key=True)
    TDtask_id = Column(Integer, ForeignKey('ToDoTask.TDtask_id', ondelete="CASCADE"))
    user_id = Column(Integer, ForeignKey('users.user_id', ondelete="CASCADE"))

    task = relationship("ToDoTask", backref="nds")
    user = relationship("User", backref="nds")

#
# class User(Base):
#     __tablename__ = 'users'
#
#     id_user = Column(Integer, primary_key=True, nullable=False)
#     user_phone = Column(Integer)

class Model():
    def __init__(self):
        self.engine = create_engine('sqlite:///ToDoTasks.db')
        self.Session = sessionmaker(bind=self.engine)
        self.session = self.Session()

    def create_table(self):
        Base.metadata.create_all(self.engine)
