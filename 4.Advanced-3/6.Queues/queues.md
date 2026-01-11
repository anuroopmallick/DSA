When queues are usually used in stream-based questions
Queues (or variants like deque, priority queue) are used when the stream requires:

1. Order preservation
   If elements must be processed in the same order they arrive:

Sliding window problems

Recent elements tracking
➡️ Queue / Deque

Example:

Find the first non-repeating character in a stream

2. Sliding window logic
   When you only care about the last K elements:

Moving averages

Max/min in a window
➡️ Deque

Example:

Maximum of all subarrays of size K

3. Buffering or delayed processing
   When elements must wait until a condition is met:

Rate limiting

Task scheduling
➡️ Queue

4. Real-time processing
   Streams are often continuous, and queues allow:

Constant time insertion/removal

Incremental updates
➡️ Queue

When queues are NOT the best choice
It depends on the problem requirement 👇

1. Need fastest min/max
   ➡️ Heap (Priority Queue)
   Example:

Find the median of a stream
Uses two heaps, not a queue.

2. Need frequency or uniqueness
   ➡️ HashMap / Set
   Example:

Count distinct elements in a stream

3. Need random access or history
   ➡️ Array / List

4. Need recent elements but also fast lookups
   ➡️ Deque + HashMap combo

Rule of thumb (very important for interviews)

If the stream problem mentions “recent”, “window”, “order”, or “arrival” → think Queue/Deque first.

Then verify if:

You need min/max → Deque

You need priority → Heap

You need frequency → HashMap

Interview mindset (quick checklist)
Ask yourself:

Do elements expire? → Queue

Is order important? → Queue

Fixed window size? → Deque

Need median/min/max? → Heap

If you want, I can:

Show classic stream questions and which DS they use

Give you a decision flowchart

Solve one stream question step-by-step using a queue

Just tell me 👍
