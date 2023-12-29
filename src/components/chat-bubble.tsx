const ChatBubble = (props: any) => {
    const { staff, customer = [] } = props;

    return (
        <>
            {staff.map((staff: any) => (
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt={staff.alt} src={staff.url} />
    </div>
  </div>
  <div className="chat-header">
    {staff.name}
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">{staff.text}</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>))}
{customer.map((customer: any) => (
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt={customer.alt} src={customer.url} />
    </div>
  </div>
  <div className="chat-header">
    {customer.name}
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-footer opacity-50">
  <div className="chat-bubble">{customer.text}</div>
    Seen at 12:46
  </div>
</div>))}
        </>
    );

}

export default ChatBubble;