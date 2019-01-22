'use strict';

const MessageHistory = (props) => {
  const { list } = props;
  const renderMessages = (list) => {
    const result = list.map(message => {
      const { id, from, type, ...data } = message;
      const Component = type === 'response' ? Response : type === 'message' ? Message : Typing;
      return <Component key={id} from={from} message={data} />
    });
    return result;
  }
  return <ul>{renderMessages(list)}</ul>
}
