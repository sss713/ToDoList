import datetime

from sqlalchemy import create_engine, Column, Integer, String, Boolean, Date, ForeignKey, Table, MetaData, insert
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
        # self.metadata = MetaData()

    def create_table(self):
        Base.metadata.create_all(self.engine)

    def init_table(self):
        ToDoTask = Table('ToDoTask', self.metadata, autoload=True)
        users = Table('users', self.metadata, autoload=True)
        ND = Table('nd', self.metadata, autoload=True)

    async def add_task_to_db(self, id_user, task_status, data: dict):
        data['TDtask_completed'] = 0
        data['TDtask_status'] = task_status
        data['TDtask_deadline'] = datetime.datetime.strptime(data['TDtask_deadline'], '%Y-%m-%d')
        try:
            new_taskToDoTask = ToDoTask(
                TDtask_name=data['TDtask_name'],
                TDtask_description=data['TDtask_description'],
                TDtask_status=data['TDtask_status'],
                TDtask_deadline=data['TDtask_deadline'],
                TDtask_completed=data['TDtask_completed']
            )

            self.session.add(new_taskToDoTask)
            self.session.flush()

            # Теперь можно получить id записи
            new_task_id = new_taskToDoTask.TDtask_id
            query = self.session.query(User.user_id).filter(User.telegram_id == id_user).first()
            if query:
                id_user_from_db = query[0]
                new_taskND = ND(
                    TDtask_id=new_task_id,
                    user_id=id_user_from_db
                )
                self.session.add(new_taskND)
                self.session.commit()
                return True
            else:
                self.session.rollback()
                return False
        except Exception as err:
            print(err)
            return False




