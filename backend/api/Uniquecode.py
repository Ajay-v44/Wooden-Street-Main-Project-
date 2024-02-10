import uuid
from datetime import datetime

def generate_unique_id():
    # Generate a UUID
    unique_id = uuid.uuid4()
    # Get the current date and time
    current_date_time = datetime.now()
    # Format the date and time
    formatted_date_time = current_date_time.strftime("%Y%m%d-%H%M%S")
    # Combine UUID with date and time
    unique_order_id = f"{unique_id}-{formatted_date_time}"

    return unique_order_id